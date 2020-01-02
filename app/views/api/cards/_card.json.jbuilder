json.set! card.id do
    json.extract! card, :id, :title, :description, :due_date, :list_id, :author_id
end