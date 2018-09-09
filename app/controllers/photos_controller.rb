class PhotosController < ApplicationController
  
  before_action :authenticate_user!, :only =>[:destroy, :crop, :cropping]
  
  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    flash[:notice] = "Photo Deleted Successfully!!"
    redirect_to :back
  end
  
  def cropping
    @photo = Photo.find(params[:id])
  end
  
  def crop
    @photo = Photo.find(params[:id])
    @photo.update_attributes(crop_params)
    @photo.img.reprocess!  #crop the image and then save it.
    redirect_to tool_category_path(@photo.variant.tool_category)
  end

 
  def crop_params
    params.require(:photo).permit(:crop_x, :crop_y, :crop_w, :crop_h)
  end
end