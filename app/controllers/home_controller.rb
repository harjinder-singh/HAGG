class HomeController < ApplicationController
  
  def index
    @products = Variant.all
  end
  
  def about
  end
  
  def product
    @categories = ToolCategory.all
    if params[:id]
      @tool_category = ToolCategory.find(params[:id])
      @products = @tool_category.variants
    else
      @products = Variant.all
    end
  end
  
  def hot_deal
  end
  
  def contact
  end
  
end
