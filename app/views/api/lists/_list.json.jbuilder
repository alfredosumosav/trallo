json.set! list.id do
    json.extract! list, :id, :title, :board_id, :author_id
    # if board.photo.attached?
    #     json.photoUrl url_for(board.photo)
    # else
    #     json.photoUrl ""
    # end
end