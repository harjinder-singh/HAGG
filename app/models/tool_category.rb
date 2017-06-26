class ToolCategory < ActiveRecord::Base
  has_many :variants, :dependent => :destroy
  accepts_nested_attributes_for :variants
  validates :name, presence: true
end
