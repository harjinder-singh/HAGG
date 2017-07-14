class VariantsController < ApplicationController

  before_action :authenticate_user!, :only =>[:new, :create, :destroy]

  def new
    @categories = ToolCategory.all
    @variant = Variant.new
    @photo = @variant.photos.build
  end
  
  def create
    @category = ToolCategory.find(params[:category_id])
    @category.variants.new(variant_params)
    if @category.save
      flash[:notice] = "Variant Added Successfully"
      redirect_to tool_category_path(@category)
    else
      flash[:alert] = "Variant Could not be saved. #{@category.errors.full_messages.join(",")}"
      redirect_to :back
    end
  end
  
  def show
    @categories = ToolCategory.all
    @variant = Variant.find(params[:id])
  end
  
  def destroy
    @variant = Variant.find(params[:id])
    @variant.destroy
    flash[:notice] = "Variant Deleted Sucessfully!!"
    redirect_to :back
  end
  
  def featured
    @variant = Variant.find(params[:id])
    @variant.update(featured: !@variant.featured?)
    render :json => {}
  end
  
  def hot_deals
    @variant = Variant.find(params[:id])
    @variant.update(hot_deal: !@variant.hot_deal?)
    render :json => {}
  end
  
  def send_promotion
    @variant = Variant.find(params[:variant_id])
    flash[:notice] = "Email added to queue"
    redirect_to :back
  end

  private 

  def variant_params
    params.require(:variant).permit(:id, :name, :desc, :photos_attributes => [:id, :img])
  end
end