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
  
  def send_email
    name = params[:name]
    email = params[:email]
    phone_no = params[:phone_no]
    message = params[:message]
    EnquiryMailer.enquiry(name, email, phone_no, message).deliver_now
    redirect_to "/contact_us"
  end

  def send_query
    product_name = params[:product_name]
    query = params[:query]
    name = params[:name]
    email = params[:email]
    phone_no = params[:phone_no]
    EnquiryMailer.product_enquiry(name, email, phone_no, product_name, query).deliver_now
    redirect_to root_path
  end

end
