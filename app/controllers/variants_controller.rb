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
  
end