class VariantsController < ApplicationController
  
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
    EmailQueue.enqueue(@variant.id)
    flash[:notice] = "Email added to queue"
    redirect_to :back
  end
end