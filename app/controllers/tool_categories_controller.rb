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
  
  def edit
    @category = ToolCategory.find(params[:id])
  end
  
  def update
    @category = ToolCategory.find(params[:id])
    @category.update_attributes(category_params)
    redirect_to @category
  end
  
  private 

  def category_params
    params.require(:tool_category).permit(:id, :name, :variants_attributes => [:id, :name, :price, :desc, :photos_attributes => [:id, :img]])
  end
end