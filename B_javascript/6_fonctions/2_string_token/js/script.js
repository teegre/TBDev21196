function strtok(string, separator, index) {
  tokens = string.split(separator);
  return tokens[index-1];
}
