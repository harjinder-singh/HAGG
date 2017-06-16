class VariantsController < ApplicationController
  
  def show
    @categories = ToolCategory.all
    @variant = Variant.find(params[:id])
  end
  
  def destroy
    @variant = Variant.find(params[:id])
    @variant.destroy
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
end