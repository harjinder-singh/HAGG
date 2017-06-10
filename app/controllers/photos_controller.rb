class PhotosController < ApplicationController
  
  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    redirect_to :back
  end
  
end