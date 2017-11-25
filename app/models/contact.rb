class Contact < ApplicationRecord
  belongs_to :city
  # enum gender: { male: true, female: false }
  enum state: { open: 1, qualified: 2, rejected: 3 }

  scope :name_like, -> (name) { where('name ILIKE ?', "%#{name}%") }
  scope :email_like, -> (email) { where('email ILIKE ?', "%#{email}%") }
  scope :job_like, -> (job) { where('job ILIKE ?', "%#{job}%") }
  scope :dni_like, -> (dni) { where('dni ILIKE ?', "%#{dni}%") }
  scope :phone_like, -> (phone) { where('phone ILIKE ?', "%#{phone}%") }
  scope :age_equal, -> (age) { where( age: age ) }
  scope :age_greater, -> (age) { where('age > ?', age ) }
  scope :age_less, -> (age) { where('age < ?', age ) }
  scope :city, -> (city) { where(city_id: city) }
  scope :state, -> (state) { where(state: state) }
  scope :gender, -> (gender) { gender == 'male' ? where(gender: true) : where(gender: false)  }

  def self.filter(params)
    contacts = Contact.all
    contacts = contacts.name_like(params[:name]) if params[:name].present?
    contacts = contacts.email_like(params[:email]) if params[:email].present?
    contacts = contacts.job_like(params[:job]) if params[:job].present?
    contacts = contacts.dni_like(params[:dni]) if params[:dni].present?
    contacts = contacts.phone_like(params[:phone]) if params[:phone].present?
    contacts = contacts.age_equal(params[:age_equal])  if params[:age_equal].present?
    contacts = contacts.age_greater(params[:age_greater])  if params[:age_greater].present?
    contacts = contacts.age_less(params[:age_less])  if params[:age_less].present?
    contacts = contacts.city(params[:city])  if params[:city].present?
    contacts = contacts.state(params[:state])  if params[:state].present?
    contacts = contacts.gender(params[:gender])  if params[:gender].present?
    return contacts
  end

end
