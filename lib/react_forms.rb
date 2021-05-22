# frozen_string_literal: true
require 'bundler/setup'
require_relative "react_forms/version"
require_relative "react_forms/renderer"

module ReactForms
  class Error < StandardError; end
  # Your code goes here...


end
names = %w[login password]
ReactForms::Renderer.new(names, input_group: true).render_to_file
