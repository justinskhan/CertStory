import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import { DISCUSSION_POSTS, DISCUSSION_CATEGORIES } from '../data/posts.js'
import { ThumbsUpIcon, CommentIcon } from '../icons/Icons.jsx'

export default function DiscussionScreen({ nav }) {
  const [activeCategory, setActiveCategory] = useState('For you')
  const [searchQuery, setSearchQuery] = useState('')
  const [likedPosts, setLikedPosts] = useState(new Set())

  const filteredPosts = DISCUSSION_POSTS.filter(post => {
    // Filter by category
    const categoryMatch = activeCategory === 'For you' || post.tag === activeCategory
    // Filter by search query
    const searchMatch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && searchMatch
  })

  function handleLikeClick(e, postId) {
    e.stopPropagation()
    setLikedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  function handlePostClick(postId) {
    nav.pushScreen('postDetail', { postId })
  }

  return (
    <div className="screen">
      <TopBar />

      <div className="discussion-header">
        <h2>Discussion Board</h2>
        <p>Share study tips, ask questions, swap stories</p>
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search conversations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="discussion-tabs">
        {DISCUSSION_CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`disc-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredPosts.map(post => (
        <button key={post.id} className="post-card" onClick={() => handlePostClick(post.id)}>
          <div className="post-header">
            <div className="post-avatar" style={{ background: post.avatarColor }}>{post.initials}</div>
            <div className="post-meta">
              <div className="post-author">
                {post.author}
                {post.role && <> · <span className="role">{post.role}</span></>}
              </div>
              <div className="post-time">{post.time}</div>
            </div>
            <span className="post-tag">{post.tag}</span>
          </div>
          <div className="post-title">{post.title}</div>
          <div className="post-snippet">{post.snippet}</div>
          <div className="post-footer">
            <button
              className={`like-btn-small ${likedPosts.has(post.id) ? 'liked' : ''}`}
              onClick={(e) => handleLikeClick(e, post.id)}
            >
              <ThumbsUpIcon />{likedPosts.has(post.id) ? post.upvotes + 1 : post.upvotes}
            </button>
            <span><CommentIcon />{post.comments}</span>
            {post.badge && <span className="badge">{post.badge}</span>}
          </div>
        </button>
      ))}
    </div>
  )
}
