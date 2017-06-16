class HomeController < ApplicationController
  
  def index
    @featured = Variant.where(:featured => true)
    @hot_deals = Variant.where(:hot_deal => true)
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
   @products = Variant.where(:hot_deal => true)
  end
  
  def contact
  end
  
end
