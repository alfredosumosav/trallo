json.set! card.id do
    json.extract! card, :id, :title, :description, :due_date, :list_id, :author_id
    if board
        json.set! :board_id, board.id
    end
end