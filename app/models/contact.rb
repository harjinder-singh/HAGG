class Contact < ActiveRecord::Base
  require "csv"

  validates :email, presence: true, uniqueness: true

  def self.import(file)
    CSV.foreach(file.path, headers: true, encoding:'iso-8859-1:utf-8') do |row|
      if row["E-mail 1 - Value"].present?
        email = row["E-mail 1 - Value"]
        user = Contact.where(email: email)
        unless user.present?
          Contact.create(name: row["Name"], email: email, phone_no: row["Phone 1 - Value"])
        end
      end
    end
  end
end
