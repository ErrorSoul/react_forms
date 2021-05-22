require 'erb'

module ReactForms
  class Renderer
    attr_reader :name, :names, :input_group

    def initialize(names, name: nil, input_group: false)
      @name = name
      @names = names
      @input_group = input_group
    end

    def names_string
      names.to_s
    end

    def name_type(name)
      %w[email password].include?(name) ? name : 'text'
    end

    def render_name
      input_group ? 'input_group_form' : 'form'
    end

    def render
      puts render_name
      ERB.new(File.read("templates/#{render_name}.erb")).result(binding)
    end

    def render_to_file
      File.open('my_file_erb.jsx', 'wb') do |f|
        f.puts render
      end
    end
  end
end
