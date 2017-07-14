class ToolCategoriesController < ApplicationController

  before_action :authenticate_user!

  def new
    @category = ToolCategory.new
    @variant = @category.variants.build
    @photo = @variant.photos.build
  end
  
  def create
    @category = ToolCategory.new(category_params)
    if @category.save
      flash[:notice] = "Category Added Successfully"
      redirect_to tool_category_path(@category)
    else
      flash[:alert] = "Category Could not be saved. #{@category.errors.full_messages.join(",")}"
      redirect_to :back
    end
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
    if @category.update_attributes(category_params)
      flash[:notice] = "Category Updated Successfully"
    else
      flash[:alert] = "Category Could not be updated. #{@category.errors.full_messages.join(",")}"
    end
    redirect_to @category
  end
  
  def destroy
    @category = ToolCategory.find(params[:id])
    @category.destroy
    flash[:notice] = "Category Deleted Sucessfully!!"
    redirect_to root_path
  end
  
  def add_variant
    @category = ToolCategory.new
    @variant = @category.variants.build
    @photo = @variant.photos.build
  end
  
  def insert_variant
    @category = ToolCategory.find(params[:id])
    if @category.update_attributes(category_params)
      flash[:notice] = "Category Updated Successfully"
    else
      flash[:alert] = "Category Could not be updated. #{@category.errors.full_messages.join(",")}"
    end
    redirect_to @category
  end
  
  private 

  def category_params
    params.require(:tool_category).permit(:id, :name, :variants_attributes => [:id, :name, :price, :desc, :photos_attributes => [:id, :img]])
  end
end