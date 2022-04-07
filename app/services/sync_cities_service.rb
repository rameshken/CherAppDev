# frozen_string_literal: true

class SyncCitiesService
  def execute
    SyncCitiesJob.perform_async()
  end

  def synchronize
    cities = SimplyRets.get_cities
    cities.each do |city|
      Area.find_or_create_by!(name: city.titleize)
    end
  end
end
