class ToolCategory < ActiveRecord::Base
  has_many :variants
  accepts_nested_attributes_for :variants
end
