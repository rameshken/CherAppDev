class ContactSupport < ApplicationRecord
	before_save :normalize_phone
	validates :phone, phone: {allow_blank: true, types: [:voip, :mobile], countries: [:us]}

	def normalize_phone
    self.phone = Phonelib.parse(phone).full_e164.presence
  end	
end
