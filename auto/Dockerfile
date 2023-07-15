FROM alpine

# Install apk and git
RUN apk update
RUN apk add git

# Copy the script bash into the container
COPY ./pull.sh pull.sh

# Set the working directory
WORKDIR /app

# Default command to execute when the container starts
CMD ["pull.sh"]
