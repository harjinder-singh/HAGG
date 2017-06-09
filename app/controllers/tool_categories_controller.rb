class ToolCategoriesController < ApplicationController
  
  def new
    @category = ToolCategory.new
    @variant = @category.variants.build
    @photo = @variant.photos.build
  end
  
  def create
    @category = ToolCategory.create(category_params)
    flash[:notice] = "Category Added Successfully"
    redirect_to tool_category_path(@category)
  end
  
  def index
    @categories = ToolCategory.all
  end
  
  def show
    @category = ToolCategory.find(params[:id])
  end
  
  private 

  def category_params
    params.require(:tool_category).permit(:name, :variants_attributes => [:name, :price, :desc, :photos_attributes => [:img]])
  end
end