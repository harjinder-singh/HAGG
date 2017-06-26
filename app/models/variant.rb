class Variant < ActiveRecord::Base
  belongs_to :tool_category
  has_many :photos, :dependent => :destroy
  accepts_nested_attributes_for :photos, allow_destroy: true
  validates :name, presence: true
  
  def self.search(search)
    where("lower(name) LIKE ?", "%#{search.downcase}%") 
  end
end
