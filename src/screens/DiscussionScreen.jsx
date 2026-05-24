import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import { DISCUSSION_POSTS, DISCUSSION_CATEGORIES } from '../data/posts.js'
import { ThumbsUpIcon, CommentIcon } from '../icons/Icons.jsx'

export default function DiscussionScreen({ nav }) {
  const [activeCategory, setActiveCategory] = useState('For you')

  return (
    <div className="screen">
      <TopBar />

      <div className="discussion-header">
        <h2>Discussion Board</h2>
        <p>Share study tips, ask questions, swap stories</p>
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

      {DISCUSSION_POSTS.map(post => (
        <button key={post.id} className="post-card" onClick={() => alert(`TODO: open detail for "${post.title}"`)}>
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
            <span><ThumbsUpIcon />{post.upvotes}</span>
            <span><CommentIcon />{post.comments}</span>
            {post.badge && <span className="badge">{post.badge}</span>}
          </div>
        </button>
      ))}
    </div>
  )
}
