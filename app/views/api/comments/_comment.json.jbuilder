json.set! comment.id do
    json.extract! comment, :id, :body, :card_id, :author_id
    json.author_username comment.author.username
end