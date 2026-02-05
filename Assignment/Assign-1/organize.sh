mkdir -p PDFs Images Text

for file in *; do
  
  [ -f "$file" ] || continue

  case "$file" in
    *.pdf)
     mv -- "$file" PDFs/
     ;;
     *.jpg|*.png|*.jpeg)
    mv -- "$file" Images/
    ;;
    *.txt|*.docs)
    mv --"$file" Text/
    ;;
  esac
 done

