@lists.each do |list|
    json.partial! 'api/lists/list', list: list
end