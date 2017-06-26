class PhotosController < ApplicationController
  
  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    flash[:notice] = "Photo Deleted Successfully!!"
    redirect_to :back
  end
  
end