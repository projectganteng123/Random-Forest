
function predictDifficulty(row) {
    const trees = [
        function(row){
if (row[4] < 27.26861111111111) {
  if (row[3] < 2.187) {
    if (row[0] < 1) {
      return "ulangi";
    } else {
      if (row[3] < 1.415) {
        if (row[1] < 1) {
          return "hafal";
        } else {
          return "hafal";
        }
      } else {
        if (row[2] < 2.669) {
          if (row[3] < 1.433) {
            return "cukup";
          } else {
            if (row[3] < 1.876) {
              if (row[0] < 1) {
                return "hafal";
              } else {
                return "hafal";
              }
            } else {
              if (row[1] < 3) {
                return "hafal";
              } else {
                return "hafal";
              }
            }
          }
        } else {
          return "cukup";
        }
      }
    }
  } else {
    if (row[3] < 4.963) {
      if (row[0] < 1) {
        if (row[3] < 2.428) {
          return "ulangi";
        } else {
          if (row[0] < 0) {
            return "ulangi";
          } else {
            return "ulangi";
          }
        }
      } else {
        if (row[4] < 24.261388888888888) {
          if (row[3] < 2.556) {
            if (row[2] < 4.605) {
              if (row[1] < 1) {
                return "cukup";
              } else {
                return "cukup";
              }
            } else {
              return "hafal";
            }
          } else {
            if (row[4] < 3.1172222222222223) {
              if (row[1] < 2) {
                if (row[3] < 4.014) {
                  if (row[2] < 6.819) {
                    if (row[4] < 0) {
                      return "hafal";
                    } else {
                      return "hafal";
                    }
                  } else {
                    if (row[4] < 0) {
                      return "ragu";
                    } else {
                      return "ragu";
                    }
                  }
                } else {
                  if (row[3] < 4.721) {
                    if (row[2] < 1.133) {
                      return "cukup";
                    } else {
                      return "cukup";
                    }
                  } else {
                    return "hafal";
                  }
                }
              } else {
                return "ragu";
              }
            } else {
              return "hafal";
            }
          }
        } else {
          return "cukup";
        }
      }
    } else {
      if (row[0] < 1) {
        if (row[2] < 0.783) {
          return "ulangi";
        } else {
          return "ulangi";
        }
      } else {
        if (row[1] < 2) {
          if (row[0] < 1) {
            return "cukup";
          } else {
            return "cukup";
          }
        } else {
          if (row[3] < 13.039) {
            return "hafal";
          } else {
            return "ragu";
          }
        }
      }
    }
  }
} else {
  if (row[0] < 1) {
    return "hafal";
  } else {
    return "hafal";
  }
}
        },
        function(row){
if (row[3] < 1.551) {
  if (row[4] < 0) {
    return "hafal";
  } else {
    return "hafal";
  }
} else {
  if (row[0] < 1) {
    if (row[4] < 6.114444444444445) {
      if (row[1] < 1) {
        return "ulangi";
      } else {
        return "ulangi";
      }
    } else {
      if (row[1] < 2) {
        return "ulangi";
      } else {
        return "ulangi";
      }
    }
  } else {
    if (row[3] < 2.708) {
      if (row[3] < 2.111) {
        if (row[2] < 1.536) {
          if (row[1] < 1) {
            return "hafal";
          } else {
            return "hafal";
          }
        } else {
          if (row[2] < 1.952) {
            if (row[3] < 1.876) {
              if (row[2] < 1.597) {
                return "cukup";
              } else {
                if (row[2] < 1.597) {
                  return "hafal";
                } else {
                  return "hafal";
                }
              }
            } else {
              return "cukup";
            }
          } else {
            if (row[4] < 0.029166666666666667) {
              return "cukup";
            } else {
              return "cukup";
            }
          }
        }
      } else {
        if (row[3] < 2.204) {
          if (row[3] < 2.111) {
            return "hafal";
          } else {
            return "hafal";
          }
        } else {
          if (row[2] < 5.269) {
            if (row[1] < 2) {
              if (row[2] < 5.138) {
                if (row[3] < 2.595) {
                  if (row[2] < 1.819) {
                    return "hafal";
                  } else {
                    return "hafal";
                  }
                } else {
                  return "hafal";
                }
              } else {
                return "hafal";
              }
            } else {
              return "cukup";
            }
          } else {
            return "ragu";
          }
        }
      }
    } else {
      if (row[4] < 3.11) {
        if (row[3] < 4.014) {
          if (row[3] < 2.896) {
            if (row[0] < 1) {
              return "cukup";
            } else {
              return "cukup";
            }
          } else {
            if (row[4] < 3.0866666666666664) {
              if (row[3] < 2.939) {
                return "ragu";
              } else {
                return "hafal";
              }
            } else {
              return "ragu";
            }
          }
        } else {
          if (row[3] < 4.466) {
            return "cukup";
          } else {
            if (row[4] < 0) {
              return "cukup";
            } else {
              return "cukup";
            }
          }
        }
      } else {
        if (row[2] < 0.867) {
          return "cukup";
        } else {
          return "hafal";
        }
      }
    }
  }
}
        }
    ];

    let votes = {};
    for (let t of trees) {
        let p = t(row);
        votes[p] = (votes[p] || 0) + 1;
    }

    let best = null, max = -1;
    for (let k in votes) {
        if (votes[k] > max) { max = votes[k]; best = k; }
    }
    return best;
}
        