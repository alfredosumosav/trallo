json.set! board.id do
    json.extract! board, :id, :title, :favorited, :archived, :author_id
    if board.photo.attached?
        json.photoUrl url_for(board.photo)
    else
        json.photoUrl ""
    end
end