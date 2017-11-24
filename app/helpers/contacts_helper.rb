module ContactsHelper
  def integer_from_state
    [['normal', 1], ['premium', 1], ['disabled', 2]]
  end

  def integer_to_state(state)
    case state
      when 1
        'normal'
      when 2
        'premium'
      when 3
        'disabled'
    end
  end

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
end
