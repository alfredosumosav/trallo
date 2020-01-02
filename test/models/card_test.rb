# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  due_date    :datetime
#  board_id    :integer          not null
#  list_id     :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
