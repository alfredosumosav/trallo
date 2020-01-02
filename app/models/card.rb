# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  due_date    :datetime
#  list_id     :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ApplicationRecord
    validates :title, :list_id, :author_id, presence: true
    
    belongs_to :list,
        primary_key: :id,
        foreign_key: :list_id,
        class_name: :List

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end
