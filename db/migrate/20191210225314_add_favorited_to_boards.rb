class AddFavoritedToBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :favorited, :boolean, null: false, default: false
  end
end
