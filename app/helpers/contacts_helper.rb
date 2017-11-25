module ContactsHelper

  def boolean_from_genre
    [['male', true], ['female', false]]
  end

  def boolean_to_genre(genre)
    if genre
      'male'
    else
      'female'
    end
  end

  def human_attribute_states
    Hash[Contact.states.map { |k,v| [ Contact.human_attribute_name("state.#{k}" ), k ] }]
  end

  def human_attribute_state(state)
    Contact.human_attribute_name("state.#{state}")
  end

end
