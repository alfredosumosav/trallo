json.set! card.id do
    json.extract! card, :id, :title, :description, :due_date, :list_id, :author_id
    json.list_title card.list.title
    json.board_id card.list.board_id
    json.author_username card.author.username
    json.comments card.comments.each do |comment|
        json.extract! comment, :id, :body, :card_id, :author_id
        json.author_username comment.author.username
    end
end