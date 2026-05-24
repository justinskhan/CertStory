import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import { getPostById, POST_COMMENTS } from '../data/posts.js'
import { ThumbsUpIcon, CommentIcon } from '../icons/Icons.jsx'

export default function PostDetailScreen({ nav, postId }) {
  const post = getPostById(postId)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post?.upvotes || 0)

  if (!post) {
    return (
      <div className="screen">
        <TopBar onBack={nav.popScreen} />
        <p>Post not found.</p>
      </div>
    )
  }

  const comments = POST_COMMENTS[postId] || []

  const handleLike = () => {
    if (!liked) {
      setLiked(true)
      setLikeCount(likeCount + 1)
    } else {
      setLiked(false)
      setLikeCount(likeCount - 1)
    }
  }

  return (
    <div className="screen">
      <TopBar onBack={nav.popScreen} />

      <div className="post-detail-header">
        <div className="post-header">
          <div className="post-avatar" style={{ background: post.avatarColor }}>
            {post.initials}
          </div>
          <div className="post-meta">
            <div className="post-author">
              {post.author}
              {post.role && <> · <span className="role">{post.role}</span></>}
            </div>
            <div className="post-time">{post.time}</div>
          </div>
          <span className="post-tag">{post.tag}</span>
        </div>
        <h2 className="post-detail-title">{post.title}</h2>
        <p className="post-detail-snippet">{post.snippet}</p>
      </div>

      <div className="post-detail-actions">
        <button
          className={`like-btn ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <ThumbsUpIcon /> {likeCount}
        </button>
        <div className="comment-count">
          <CommentIcon /> {post.comments}
        </div>
        {post.badge && <span className="badge">{post.badge}</span>}
      </div>

      <div className="comments-section">
        <h3>Comments ({comments.length})</h3>
        {comments.map(comment => (
          <div key={comment.id} className="comment-card">
            <div className="comment-header">
              <div className="comment-avatar" style={{ background: comment.avatarColor }}>
                {comment.initials}
              </div>
              <div className="comment-meta">
                <div className="comment-author">{comment.author}</div>
                <div className="comment-time">{comment.time}</div>
              </div>
            </div>
            <div className="comment-text">{comment.text}</div>
            <div className="comment-footer">
              <span><ThumbsUpIcon /> {comment.upvotes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
