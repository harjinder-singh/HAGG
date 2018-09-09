class Photo < ActiveRecord::Base
  belongs_to :variant
  has_attached_file :img, styles: { large: "600x600>", medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png", :processors => [:jcropper]
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/

  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h


  def cropping?
    !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
  end

  # helper method used by the cropper view to get the real image geometry
  def avatar_geometry(style = :original)
    @geometry ||= {}
    @geometry[style] ||= Paperclip::Geometry.from_file img.path(style)
  end

  private

  def reprocess_avatar
    img.reprocess!
  end

end
