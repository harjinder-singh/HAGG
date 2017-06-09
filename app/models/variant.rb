class Variant < ActiveRecord::Base
  belongs_to :tool_category
  has_many :photos
  accepts_nested_attributes_for :photos
end
