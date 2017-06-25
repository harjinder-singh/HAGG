class ContactsController < ApplicationController
  
 def index
   @contacts = Contact.all
 end
 
 def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    redirect_to :back
 end
 
  def edit
    @contact = Contact.find(params[:id])
  end
  
  def update
    @contact = Contact.find(params[:id])
    @contact.update_attributes(contact_params)
    redirect_to contacts_path
  end
 
 def import_contacts
     Contact.import(params[:file])
     redirect_to :back
  end

  private 

  def contact_params
    params.require(:contact).permit(:id, :name, :email, :phone_no)
  end

end