class EnquiryMailer < ActionMailer::Base


  def enquiry(name, email, phone_no, message, company)
    @name = name
    @email = email
    @phone_no = phone_no
    @message = message
    @company = company
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

  def product_promotion(variant_id)
    @variant = Variant.find(variant_id)
    Contact.all.each do |con|
      @con = con
      mail(to: con.email, subject: "Checkout our new product", from:"from@example.com").deliver
    end
  end

end
