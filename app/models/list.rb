# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
    validates :title, :board_id, :author_id, presence: true

    belongs_to :board,
        primary_key: :id,
        foreign_key: :board_id,
        class_name: :Board

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end
