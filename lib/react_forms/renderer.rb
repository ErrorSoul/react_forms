require 'erb'
module ReactForms

  class Renderer


   attr_reader :name, :names

    def initialize(names, name: nil)
      @name = name
      @names = names
    end


    def names_string
      names.join(", ")
    end


    def render
      #binding.irb
      ERB.new(File.read('templates/form.erb')).result(binding)
    end

    def render_to_file
      File.open('my_file_erb.jsx', 'wb') do |f|
        f.puts render
      end

    end


  end

end
