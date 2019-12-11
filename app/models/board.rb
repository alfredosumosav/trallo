# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  favorited  :boolean          default("false"), not null
#  archived   :boolean          default("false"), not null
#

class Board < ApplicationRecord
    validates :title, :author_id, presence: true
    
    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
    
    has_one_attached :photo
end
