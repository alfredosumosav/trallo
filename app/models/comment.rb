# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  card_id    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, :card_id, :author_id, presence: true

    belongs_to :card,
        primary_key: :id,
        foreign_key: :card_id,
        class_name: :Card

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_one :list,
        through: :card,
        source: :list

    has_one :board,
        through: :list,
        source: :board

end
