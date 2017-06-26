class EnquiryMailer < ActionMailer::Base


  def enquiry(name, email, phone_no, message)
    @name = name
    @email = email
    @phone_no = phone_no
    @message = message
    mail(to: ENV["admin_mail"], subject: "Message from Mr/Mrs #{@name}", from:"from@example.com")
  end
  
  def product_enquiry(name, email, phone_no, product_name, query, company, person_type)
    @name = name
    @email = email
    @phone_no = phone_no
    @message = query
    @product_name = product_name
    @company = company
    @person_type = person_type
    mail(to: ENV["admin_mail"], subject: "Query received about #{@product_name} by Mr/Mrs #{@name}", from:"from@example.com")
  end

end
