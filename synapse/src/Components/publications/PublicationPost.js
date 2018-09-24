import React from 'react'
import moment from 'moment'
import Likes from '../dashboard/likes'

const PublicationPost = ({ publication }) => {
  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text text-darken-3 ">
        <div>
          <div id="avatar">
            <span className="btn-floating btn-large waves-effect waves-light blue-grey lighten-3">{publication.authorInitials}</span>
          </div>
          <div>
            <span className="author"> {publication.authorFirstName} {publication.authorLastName}</span>
            <p className="grey-text">{moment(publication.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
        <p className="post">{publication.content}</p>
        <Likes className="like" />
      </div>
    </div>
  )
}
export default PublicationPost
