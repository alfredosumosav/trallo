class AddArchivedToBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :archived, :boolean, null: false, default: false
  end
end
