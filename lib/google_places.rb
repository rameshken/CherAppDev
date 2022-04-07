# frozen_string_literal: true

class GooglePlaces
  require 'rest-client'
  API_KEY = ENV['GOOGLE_MAPS_KEY']
  PLACES_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json"

  def self.is_valid?(input)
    response = autocomplete_api_call(input)
    return false if response["status"] == "ZERO_RESULTS"

    response["predictions"].each do |prediction|
      return true if prediction["description"].downcase.include?(input.downcase)
    end

    return false
  end

  def self.autocomplete_api_call(query)
    response = RestClient::Request.execute(
      :method => :get, 
      :url => PLACES_URL,
      :headers => { 
        params: {input: query, types: "(regions)", key: API_KEY, components: "country:us" }
      }
    )
    return JSON.parse(response)
  end
end
