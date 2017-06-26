class ContactsController < ApplicationController
  
  before_action :authenticate_user!
  
  def index
   @contacts = Contact.order(:name).page params[:page]
  end
 
 def new
   @contact = Contact.new
 end
 
  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      flash[:notice] = "Contact Added Successfully!!"
    else
      flash[:alert] = "Contact Could not be saved. #{@contact.errors.full_messages.join(",")}"
    end
    redirect_to contacts_path
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    flash[:notice] = "Contact Deleted Successfully!!"
    redirect_to :back
  end
 
  def edit
    @contact = Contact.find(params[:id])
  end
  
  def update
    @contact = Contact.find(params[:id])
    if @contact.update_attributes(contact_params)
      flash[:notice] = "Contact Updated Successfully!!"
    else
      flash[:alert] = "Contact Could not be Updated. #{@contact.errors.full_messages.join(",")}"
    end
    redirect_to contacts_path
  end
 
  def import_contacts
    begin
     Contact.import(params[:file])
     flash[:notice] = "Contacts Imported Sucessfully!!"
    rescue Exception => e
      flash[:alert] = e.message
    end
     redirect_to :back
  end

  private 

  def contact_params
    params.require(:contact).permit(:id, :name, :email, :phone_no)
  end

end